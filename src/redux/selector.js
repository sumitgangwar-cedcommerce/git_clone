import { saveData } from "./action";

export const mapStateToProps = (state) => {
    return {
      data: state,
    };
  };
  
  export const mapDispatchToProps = (dispatch) => {
    return {
      saveData: (d) => dispatch(saveData(d)),
    };
  };