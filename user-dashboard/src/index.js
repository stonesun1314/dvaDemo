import dva from 'dva'
import './index.html'
import './index.css'

// 1. Initialize
const app = dva()

app.model(require('./models/users'))

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default)

// 5. Start
app.start('#root')
