const CARCASSONNE_COUNTER_CONTAINER_ID = 'carcassonne-counter';
const CARCASSONNE_COUNTER_EXPAND_CLASSNAME = 'expand'

const TILE_SELECTOR = 'div.bdtile';
const INNS_AND_CATHEDRALS_CLASS_NAME = 'carcassonne_exp1';
const TRADERS_AND_BUILDERS_CLASS_NAME = 'carcassonne_exp2';

function isGameWithInnsAndCathedrals() {
    return document.body.classList.contains(INNS_AND_CATHEDRALS_CLASS_NAME)
}

function isGameWithTradersAndBuilders() {
    return document.body.classList.contains(TRADERS_AND_BUILDERS_CLASS_NAME)
}

function countTiles(basicTiles) {
    const playedTilesIds = getTilesIds(document.querySelectorAll(TILE_SELECTOR))
    const data = basicTiles.map((tile) => {
        const remainingQty = tile.bgaIds.filter((id) => !playedTilesIds.includes(id)).length
        return {
            ...tile,
            remainingQty,
            odd: (Math.round(1000 * remainingQty / playedTilesIds.length)) / 10
        }
    })
    generateTilesInfos(data, getCountersTilesDiv())
}

function generateTilesInfos(data, container) {
    container.innerHTML = ''
    data.filter((tileInfo) => tileInfo.remainingQty > 0)
        .map((tileInfo) => {
            const img = createImage(tileInfo.image)
            img.dataset.remaining = tileInfo.remainingQty
            return img
        }).forEach((img) => container.appendChild(img))
}

function getTilesIds(tileElements) {
    return Array.from(tileElements).map((tile) => {
        try {
            return parseInt(tile.id.split('_').pop(), 10)
        } catch (error) {
            return -1
        }
    }).filter((id) => id > 0)
}

function getCountersTilesDiv() {
    let carcassonneCounterTiles = document.querySelector('.carcassonne-counter__tiles')
    let caracassonneCounterContainer = document.getElementById(CARCASSONNE_COUNTER_CONTAINER_ID)
    if (!caracassonneCounterContainer) {
        caracassonneCounterContainer = document.createElement('div')
        caracassonneCounterContainer.id = CARCASSONNE_COUNTER_CONTAINER_ID
        caracassonneCounterContainer.className = 'carcassonne-counter'

        caracassonneCounterContainer.appendChild(createMainButton(caracassonneCounterContainer))

        carcassonneCounterTiles = createCounterTilesDiv()
        caracassonneCounterContainer.appendChild(carcassonneCounterTiles)

        document.body.appendChild(caracassonneCounterContainer)
    }

    return carcassonneCounterTiles
}

function createCounterTilesDiv() {
    const counterTiles = document.createElement('div');
    counterTiles.className = 'carcassonne-counter__tiles'

    return counterTiles
}

function createMainButton(container) {
    const button = document.createElement('button');
    button.className = 'carcassonne-counter__button'
    button.addEventListener('click', function () {
        if (container.classList.contains(CARCASSONNE_COUNTER_EXPAND_CLASSNAME)) {
            container.classList.remove(CARCASSONNE_COUNTER_EXPAND_CLASSNAME)
        } else {
            container.classList.add(CARCASSONNE_COUNTER_EXPAND_CLASSNAME)
        }
    })

    const img = document.createElement('img');
    img.src = chrome.runtime.getURL(`assets/blue-meeple.png`)

    button.appendChild(img)

    return button
}

function createImage(filename) {
    const imgContainer = document.createElement('div');
    imgContainer.className = 'carcassonne-counter__tile-container'
    const img = document.createElement('img');
    img.src = chrome.runtime.getURL(`assets/${filename}`)
    img.style.alt = filename
    imgContainer.appendChild(img)
    return imgContainer
}

function onElementAvailable(selector, callback) {
    const observer = new MutationObserver(mutations => {
        if (document.querySelector(selector)) {
            observer.disconnect();
            callback();
        }
    });

    observer.observe(document.body, {childList: true, subtree: true});
}