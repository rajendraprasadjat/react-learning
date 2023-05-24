import React, {
  forwardRef,
  useContext,
  useImperativeHandle,
  useState,
} from "react";
import { GlobalContext } from "../provider/GlobalProvider";
import PropTypes from "prop-types";
import withConfigData from "../hoc/withConfigData";

const Header = forwardRef(({ className }, ref) => {
  const { isDarkMode, listData } = useContext(GlobalContext);
  const [isUpdateByParent, setIsUpdateByParent] = useState(false);
  useImperativeHandle(ref, () => {
    return {
      onClick: (value) => {
        setIsUpdateByParent(value);
      },
    };
  });
  return (
    <div
      style={{ background: isDarkMode ? "white" : "black" }}
      className={className}
    >
      <ul>
        {listData &&
          listData.map((item, index) => {
            return (
              <li key={index} style={{ color: isDarkMode ? "black" : "white" }}>
                {item.name}
              </li>
            );
          })}

        {isUpdateByParent && (
          <li style={{ color: isDarkMode ? "black" : "white" }}>
            Update By Parent
          </li>
        )}
      </ul>
    </div>
  );
});

Header.propTypes = {
  className: PropTypes.string.isRequired,
};

Header.defaultProps = {
  className: "header",
};

export default withConfigData(Header);
