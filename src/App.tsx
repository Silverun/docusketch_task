import { IconDefinition, fas } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const [isInit, setIsInit] = useState(true);

  const getRandomIcon = () => {
    const iconNames = Object.keys(fas);
    const randomIcon = Math.floor(Math.random() * iconNames.length);
    const randomIconName = iconNames[randomIcon];

    return fas[randomIconName];
  };

  const [icon, setIcon] = useState<IconDefinition>(getRandomIcon);

  const randomizeHandler = () => {
    setTimeout(() => {
      if (isInit) {
        setIsInit(false);
      } else {
        setIcon(getRandomIcon());
      }
    }, 3000);
  };

  return (
    <div className="box">
      {isInit || <FontAwesomeIcon size={"5x"} icon={icon} />}
      <button className="button-29" onClick={randomizeHandler}>
        Get random icon!
      </button>
    </div>
  );
}

export default App;
