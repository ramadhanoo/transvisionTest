import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import styling from './Section.styles';

const LoadingIndicator = ({shimmerSize, loadingIndicatorStyle}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    addShimmer();
  }, []);

  const addShimmer = () => {
    var newData = [];
    for (let i = 1; i <= shimmerSize; i++) {
      newData.push(i);
    }
    setData(newData);
  };
  return data.map((item, index) => (
    <View key={index} style={loadingIndicatorStyle} />
  ));
};

export const Section = React.forwardRef(({children, ...props}, ref) => {
  const styles = styling(props);
  const {
    isLoading,
    containerBodyStyle,
    baseStyle,
    loadingContainerStyles,
    loadingIndicatorStyle,
    shimmerSize,
  } = props;

  return (
    <View style={baseStyle}>
      {isLoading === true ? (
        <View style={loadingContainerStyles}>
          <LoadingIndicator
            shimmerSize={shimmerSize}
            loadingIndicatorStyle={loadingIndicatorStyle}
          />
        </View>
      ) : (
        <View style={containerBodyStyle}>{children}</View>
      )}
    </View>
  );
});

Section.defaultProps = {
  isLoading: false,
  baseStyle: {},
  containerBodyStyle: {},
  loadingContainerStyles: {},
  loadingIndicatorStyle: {},
  shimmerSize: 5,
};
