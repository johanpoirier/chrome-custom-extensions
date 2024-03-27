const TILES_INFOS_ID = 'tiles-infos';
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
    const tilesInfosDiv = getTilesInfoDiv()
    const data = basicTiles.map((tile) => {
        const remainingQty = tile.bgaIds.filter((id) => !playedTilesIds.includes(id)).length
        return {
            ...tile,
            remainingQty,
            odd: (Math.round(1000 * remainingQty / playedTilesIds.length)) / 10
        }
    })
    generateTilesInfos(data, tilesInfosDiv)
}

function generateTilesInfos(data, container) {
    container.innerHTML = ''
    data.map((tileInfo) => {
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

function getTilesInfoDiv() {
    let tilesInfosDiv = document.getElementById(TILES_INFOS_ID)
    if (!tilesInfosDiv) {
        tilesInfosDiv = document.createElement('div');
        tilesInfosDiv.id = TILES_INFOS_ID
        tilesInfosDiv.className = 'carcassonne-counter--infos'
        document.getElementById('topbar').appendChild(tilesInfosDiv);
    }
    return tilesInfosDiv
}

function createImage(filename) {
    const imgContainer = document.createElement('div');
    imgContainer.className = 'carcassonne-counter--tile-container'
    const img = document.createElement('img');
    img.src = chrome.runtime.getURL(`tiles/${filename}`)
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