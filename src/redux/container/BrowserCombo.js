import { connect } from 'react-redux'
import { BrowserCombo } from '../../components/Combo/BrowserCombo/BrowserCombo'
import { fetchActiveCombos } from '../actions/active-combos/actions'
import { groupCombosByPolicy } from '../selector/combo'
const mapState = ({ activeCombo }) => {
	const { isFetching, items, hasError, isFetched } = activeCombo;
    const comboGroups = groupCombosByPolicy(activeCombo)
    return {
        combos: items,
        isFetching,
        comboGroups,
        hasError,
		isFetched
    }
}

const mapDispatch = {
    fetchActiveCombos
}

export default connect(mapState, mapDispatch)(BrowserCombo)