import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

export default function App() {
  const [inputText, setInputText] = useState("");
  const [reversedText, setReversedText] = useState("");

  const reverseText = () => {
    setReversedText(inputText.split("").reverse().join(""));
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TextInput
        value={inputText}
        onChangeText={setInputText}
        placeholder='Bir metin giriniz.' />

      <Button title="Change" onPress={reverseText} />

      <Text> {reversedText}</Text>
    </View>
  )
}
