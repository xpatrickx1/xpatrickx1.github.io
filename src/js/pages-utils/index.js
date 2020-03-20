export function getPages() {
    return [].slice.call(document.querySelectorAll('[page]'));
}

export function getActivePage() {
    let pages = getPages();
    let activePage = null;
    pages.forEach( page => {
        if ( page.classList.contains('active') ) {
            activePage = page;
        }
    });
    return activePage
};

export function showOnlyActivePage( page ) {
    const allPages = getPages();
    allPages.forEach( item => {
        item.classList.remove('active');
        item.classList.add('hidden');
    });
    page.classList.remove('hidden');
    page.classList.add('active');
};

export function getCurrentPageIndex () {
    const allPages = getPages();
    let pageIndex = null;
    const renderedPage = document.querySelector('.active');
    allPages.forEach( item => {
        if ( item.id ==  renderedPage.id) {
            pageIndex = allPages.indexOf(item);
        }
    });
    return pageIndex;
}
