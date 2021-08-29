/**
 * @version 1.0.0
 * @author Trejocode - Sergio
 * @description Error custom component
 */

import PropTypes from "prop-types";
import { EmojiSadIcon } from "@heroicons/react/outline";

const ErrorSection = ({ error }) => (
  <div className="__error column">
    <EmojiSadIcon height="2rem" />
    <h3>{error}</h3>
  </div>
);

ErrorSection.propTypes = {
  error: PropTypes.string.isRequired,
};

export default ErrorSection;
