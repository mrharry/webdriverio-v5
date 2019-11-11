/**
 * Created by stuart1 on 08/11/2019.
 */
export default class Page {
    open (path) {
        browser.url('http://localhost:3000' + path)
    }

    pageTitle () {
        return browser.getTitle()
    }

    keys (action) {
        if (action === 'Enter') {
            action = '\uE007'
        } else {
            action = ''
        }
        browser.keys(action)
    }
}
