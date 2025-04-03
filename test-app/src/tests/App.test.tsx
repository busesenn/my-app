import React from 'react'
import App from "../App"
import { fireEvent, render } from '@testing-library/react-native';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

describe("App", () => {
    it("Metni tersine çevirir", () => {
        const { getByPlaceholderText, getByText } = render(<App />);
        const input = getByPlaceholderText("Kriterlere uygun bir metin giriniz.")
        const button = getByText("Metni Ters Çevir.")
        fireEvent.changeText(input, "merhaba")
        fireEvent.press(button);
        expect(getByText("abahrem")).toBeTruthy();
    });

    it("boş metin girildiğinde boş metin dönsün", () => {
        const { getByText } = render(<App />)
        const button = getByText("Metni Terse Çevir.")
        fireEvent.press(button);
        expect(getByText("").toBeTruthy())
    });
    it("Özel karakterler doğru ters çevirilsin");
    const { getByPlaceholderText, getByText } = render(<App />);
    const input = getByPlaceholderText("Bir metin giriniz.")
    const button = getByText("Metni Ters Çevir");
    fireEvent.changeText(input, "12345!*?&")
    expect(getByText("&*!54321").toBeTruthy())
})