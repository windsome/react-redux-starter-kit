import { connect } from 'react-redux'
import { tempdataSet } from '../../../../store/lib/tempdata'

import Search from '../components/Search'

const mapDispatchToProps = {
    tempdataSet
}

const mapStateToProps = (state) => ({
    dbLocks: (state.database && state.database.locks) || {},
    current: (state.admin && state.admin.current) || []
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
