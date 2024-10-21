import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";

function PageTitle({ title }) {
  return (
    <Helmet>
      <title>{`${title} • Basic Eco`}</title>
    </Helmet>
  );
}

PageTitle.propTypes = {
  title: PropTypes.string,
};

export default PageTitle;
