node {
    try {
        withEnv(["PATH+NODE=${tool name: 'JenkinsNode'}/bin"]) {
            if (release == "deploy") {
                checkout()
                build()
                tests()
                reports()
            }
            else // tests only
             {
                tests()
                reports()
            }
        }
    } catch (e) {
        result = "FAIL" // make sure other exceptions are recorded as failure too
    }

}

def checkout() {
    stage 'checkout'
        deleteDir()
        checkout scm
}

def build() {
    stage 'build'
        sh 'node -v && npm -v && npm install'
}

def tests() {
    stage 'tests'
        try {
            sh 'npm run "test"'
        } catch (Exception err) {
            exit = 0
        }
}

def reports() {
    stage('reports') {
        allure includeProperties: false, jdk: '', report: 'reports/allure-report', results: [[path: 'results/allure-results']]
    }
}
