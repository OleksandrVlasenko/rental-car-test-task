const customStyles = {
  control: (provided) => ({
    ...provided,
    width: "224px",
    height: "48px",
    border: "none",
    backgroundColor: "#F7F7FB",
    borderRadius: "14px",
    outline: "none",
    boxShadow: "none",
    paddingLeft: "18px",
    cursor: "text",
    color: "red",
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "#121417" : "#12141733",
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "20px",
    background: "#fff",
    "&:hover": {
      background: "#fff",
      color: "#121417",
    },
  }),

  singleValue: (provided) => ({
    ...provided,
    color: "#121417",
    fontSize: "18px",
    fontWeight: "500",
    lineHeight: "20px",
  }),

  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: "#121417",
    cursor: "pointer",
  }),

  placeholder: (provided) => ({
    ...provided,
    color: "#121417",
    fontSize: "18px",
    fontWeight: "500",
    lineHeight: "20px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  }),

  input: (provided) => ({
    ...provided,
    color: "#121417",
    fontSize: "18px",
    fontWeight: "500",
    lineHeight: "20px",
  }),

  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),

  clearIndicator: (provided) => ({
    ...provided,
    cursor: "pointer",
    paddingRight: "0px",
  }),

  menuList: (baseStyles) => ({
    ...baseStyles,
    padding: "0px",
    "::-webkit-scrollbar": {
      width: "8px",
      height: "130px",
    },
    "::-webkit-scrollbar-track": {
      background: "#fff",
    },
    "::-webkit-scrollbar-thumb": {
      borderRadius: "10px",
      background: "rgba(18, 20, 23, 0.05)",
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "rgba(18, 20, 23, 0.05)",
    },
  }),

  menu: (provided) => ({
    ...provided,
    overflowX: "hidden",
    borderRadius: "14px",
    border: "1px solid rgba(18, 20, 23, 0.05)",
    backgroundColor: "#FFF",
    boxShadow: "0px 4px 36px 0px rgba(0, 0, 0, 0.02)",
    padding: "14px 8px 14px 18px",
  }),
};

export { customStyles };
