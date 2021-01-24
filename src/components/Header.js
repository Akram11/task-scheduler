import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color="blue" text="Add" />
        </header>
    );
};

Header.defaultProps = {
    title: "Tasks Scheduler",
};

Header.prototype = {
    title: PropTypes.string.isRequired,
};

export default Header;
