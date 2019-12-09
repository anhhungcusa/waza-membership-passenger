import { connect } from 'react-redux';
import { MyCombo } from '../../components/Combo/MyCombo/MyCombo';
import { requestMyCombo } from '../actions/my-combos/actions';
const mapState = ({ myCombo, auth }) => {
	const { hasError, isFetching, items: combos, isCompleted } = myCombo;
	const { user } = auth;
	return {
		isFetching,
        combos,
		user,
		isCompleted,
		hasError,
	};
};

const mapDispatch = {
	requestMyCombo
};

export default connect(mapState, mapDispatch)(MyCombo);
