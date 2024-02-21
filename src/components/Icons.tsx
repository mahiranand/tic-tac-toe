import React, {PropsWithChildren} from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

type IconsProps = PropsWithChildren<{
  name: string;
}>;

const Icons = ({name}: IconsProps) => {
  switch (name) {
    case 'circle':
      return <Icon name="circle-thin" size={30} color="#F7CD2E" />;
    case 'cross':
      return <Icon name="times" size={30} color="#38CC77" />;
    default:
      return <Icon name="pencil" size={30} color="white" />;
  }
};

export default Icons;
