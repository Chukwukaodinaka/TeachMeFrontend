const IconTextInput = ({ placeholder, iconName }) => {
  return (
    <View style={styles.inputContainer}>
      <Image source={iconName} style={styles.iconStyle} />
      <TextInput
        style={styles.textInputStyle}
        placeholder={placeholder}
        // Add other TextInput properties as needed
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  iconStyle: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  textInputStyle: {
    flex: 1,
  },
});
