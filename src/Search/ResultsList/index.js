import React from "react";
import { FlatList } from "react-native";

import Result from "./Result";

const ResultsList = ({ result }) => (
  <FlatList
    data={result}
    renderItem={({ item }) => <Result item={item} />}
    keyExtractor={item => item.id}
  />
);

export default ResultsList;
