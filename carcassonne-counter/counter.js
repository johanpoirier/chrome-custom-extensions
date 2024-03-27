const BOARD_DIV_ID = 'map_scrollable_oversurface';

// wait for the game to be ready
onElementAvailable(`#${BOARD_DIV_ID}`, () => {
    // build board tile list
    let tiles = basicTiles;
    if (isGameWithInnsAndCathedrals()) {
        tiles = tiles.concat(innsCathedralsTiles)
    }
    if (isGameWithTradersAndBuilders()) {
        tiles = tiles.concat(tradersBuildersTiles)
    }

    // initial count
    countTiles(tiles)

    // observe game DOM changes
    const observer = new MutationObserver(() => countTiles(tiles));
    observer.observe(document.getElementById(BOARD_DIV_ID), {attributes: false, childList: true, subtree: true});
})
