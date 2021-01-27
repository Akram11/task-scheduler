import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onToggle, toggleForm }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button
                onClick={onToggle}
                color={toggleForm ? "grey" : "blue"}
                text={toggleForm ? "Close" : "Add"}
            />
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
