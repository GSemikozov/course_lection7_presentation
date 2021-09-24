(function() {
    const gridColumnStart = document.getElementById('grid-column-start');
    const gridColumnEnd = document.getElementById('grid-column-end');
    const gridRowStart = document.getElementById('grid-row-start');
    const gridRowEnd = document.getElementById('grid-row-end');
    const item = document.getElementById('grid__item')

    gridColumnStart.addEventListener('change', (event) => {
        item.style['grid-column-start'] = event.target.value;
    });

    gridColumnEnd.addEventListener('change', (event) => {
        item.style['grid-column-end'] = event.target.value;
    });

    gridRowStart.addEventListener('change', (event) => {
        item.style['grid-row-start'] = event.target.value;
    });

    gridRowEnd.addEventListener('change', (event) => {
        item.style['grid-row-end'] = event.target.value;
    });

    const itemAlignment = document.getElementById('grid-alignment');
    const justifyItems = document.getElementById('justify-items');
    const alignItems = document.getElementById('align-items');

    justifyItems.addEventListener('change', (event) => {
        itemAlignment.style['justify-items'] = event.target.value;
    });

    alignItems.addEventListener('change', (event) => {
        itemAlignment.style['align-items'] = event.target.value;
    });


    const grid3 = document.getElementById('grid_3');
    const justifyContent = document.getElementById('justify-content');
    const alignContent = document.getElementById('align-content');

    justifyContent.addEventListener('change', (event) => {
        grid3.style['justify-content'] = event.target.value;
    });

    alignContent.addEventListener('change', (event) => {
        grid3.style['align-content'] = event.target.value;
    });


    const gridItem = document.getElementById('grid-item');

    const justifySelf = document.getElementById('justify-self');
    const alignSelf = document.getElementById('align-self');

    justifySelf.addEventListener('change', (event) => {
        gridItem.style['justify-self'] = event.target.value;
    });

    alignSelf.addEventListener('change', (event) => {
        gridItem.style['align-self'] = event.target.value;
    });

    const gridFlow = document.getElementById('grid-flow');
    const autoFlow = document.getElementById('grid-auto-flow');

    autoFlow.addEventListener('change', (event) => {
        gridFlow.style['grid-auto-flow'] = event.target.value;
    });



    const gridLineExample = document.getElementById('grid-line-example');
    const gridLineRows = document.getElementById('grid-line-rows');
    const gridLineColumns = document.getElementById('grid-line-columns');

    gridLineRows.addEventListener('change', (event) => {
        gridLineExample.style['grid-template-rows'] = event.target.value;
    });

    gridLineColumns.addEventListener('change', (event) => {
        gridLineExample.style['grid-template-columns'] = event.target.value;
    });



    const gridGap = document.getElementById('grid-gap');
    const gridGapExample = document.getElementById('grid-gap-example');

    gridGap.addEventListener('change', (event) => {
        gridGapExample.style['grid-gap'] = event.target.value;
    });
})();
