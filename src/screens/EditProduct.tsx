import React, { useState } from "react";
import { View, Text, Platform, ScrollView, Image } from "react-native";
import { Styles } from "../styles/Styles";
import Icon from 'react-native-vector-icons/Feather';
import { TextInput, Switch } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const categories = ['Eletrônicos', 'Moda', 'Casa e Banho', 'Esportes', 'Livros', 'Beleza'];

export const EditProduct = () => {
    const [isSwitchOn, setSwitch] = useState(false);
    return (
        <KeyboardAwareScrollView
            style={Styles.Main}
            contentContainerStyle={{ paddingBottom: 40, gap: 10 }}
            extraScrollHeight={Platform.OS == "ios" ? 80 : 60}
            enableOnAndroid
            keyboardOpeningTime={0}
            showsVerticalScrollIndicator={false}
        >
            <View style={{ flexDirection: "column", alignItems: "center", borderWidth: 1, borderColor: '#d9d9d9', borderRadius: 10, padding: 15, backgroundColor: "#fff" }}>
                <View style={{ flexDirection: "row", alignSelf: "flex-start", alignItems: "center", marginBottom: 10, gap: 5 }}>
                    <Icon name="box" size={20} color="#000" />
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>Informações Básicas</Text>
                </View>
                <TextInput
                    label={"Nome do produto*"}
                    placeholder="Digite o nome do produto"
                    placeholderTextColor="#64748B"
                    mode="outlined"
                    style={{ marginBottom: 8, width: 300, borderRadius: 5, backgroundColor: "#fff" }}
                    activeOutlineColor="#1D77ED"
                />
                <TextInput
                    label={"Descrição do produto*"}
                    placeholder="Digite a descrição do produto"
                    placeholderTextColor="#64748B"
                    mode="outlined"
                    style={{ marginBottom: 8, width: 300, borderRadius: 5, backgroundColor: "#fff" }}
                    activeOutlineColor="#1D77ED"
                />
            </View>
            <View style={{ flexDirection: "column", alignItems: "center", borderWidth: 1, borderColor: '#d9d9d9', borderRadius: 10, padding: 15, backgroundColor: "#fff" }}>
                <View style={{ flexDirection: "row", alignSelf: "flex-start", alignItems: "center", marginBottom: 10, gap: 5 }}>
                    <Icon name="dollar-sign" size={20} color="#000" />
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>Preço e Estoque</Text>
                </View>
                <TextInput
                    label={"Preço Atual*"}
                    placeholder="Digite o preço do produto"
                    placeholderTextColor="#64748B"
                    mode="outlined"
                    style={{ marginBottom: 8, width: 300, borderRadius: 5, backgroundColor: "#fff" }}
                    activeOutlineColor="#1D77ED"
                    keyboardType="numeric"
                />
                <View style={{ flexDirection: "row", alignItems: "center", gap: 10, alignSelf: "flex-start", marginLeft: 10 }}>
                    <Switch value={isSwitchOn} onValueChange={setSwitch} color="#1D77ED" />
                    <Text>Produto em promoção</Text>
                </View>
                <TextInput
                    label={"Preço Original"}
                    placeholder="Digite o preço do produto"
                    placeholderTextColor="#64748B"
                    mode="outlined"
                    style={{ marginBottom: 8, width: 300, borderRadius: 5, backgroundColor: "#fff" }}
                    activeOutlineColor="#1D77ED"
                    keyboardType="numeric"
                    disabled={!isSwitchOn}
                />
                <TextInput
                    label={"Quantidade em estoque*"}
                    placeholder="Digite a quantidade em estoque"
                    placeholderTextColor="#64748B"
                    mode="outlined"
                    style={{ marginBottom: 8, width: 300, borderRadius: 5, backgroundColor: "#fff" }}
                    activeOutlineColor="#1D77ED"
                    keyboardType="numeric"
                />

            </View>
            <View style={{ flexDirection: "column", alignItems: "center", borderWidth: 1, borderColor: '#d9d9d9', borderRadius: 10, padding: 15, backgroundColor: "#fff" }}>
                <View style={{ flexDirection: "row", alignSelf: "flex-start", alignItems: "center", marginBottom: 10 }}>
                    <Icon name="image" size={20} color="#000" />
                    <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 5 }}>Imagens do Produto</Text>
                </View>

                <View style={{ flexDirection: "row", flexWrap: "wrap", alignSelf: "stretch", justifyContent: "flex-start" }}>
                    <Image source={require("../../assets/smartphone.png")} style={{ height: 80, width: 80, marginRight: 10, marginBottom: 10, borderRadius: 5 }} />
                    <Image source={require("../../assets/smartphone.png")} style={{ height: 80, width: 80, marginRight: 10, marginBottom: 10, borderRadius: 5 }} />
                    <Image source={require("../../assets/smartphone.png")} style={{ height: 80, width: 80, marginRight: 10, marginBottom: 10, borderRadius: 5 }} />
                    <Image source={require("../../assets/smartphone.png")} style={{ height: 80, width: 80, marginRight: 10, marginBottom: 10, borderRadius: 5 }} />
                    <View style={{ width: 80, height: 80, borderWidth: 1, borderColor: '#d9d9d9', borderRadius: 5, justifyContent: "center", alignItems: "center", backgroundColor: "#f3f4f6", marginBottom: 10 }}>
                        <Icon name="plus" size={30} color="#9ca3af" onPress={() => {/* xiii */ }} />
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: "column", alignItems: "center", borderWidth: 1, borderColor: '#d9d9d9', borderRadius: 10, padding: 15, backgroundColor: "#fff" }}>
                <View style={{ flexDirection: "row", alignSelf: "flex-start", alignItems: "center", marginBottom: 10, gap: 5 }}>
                    <Icon name="settings" size={20} color="#000" />
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>Especificações</Text>
                </View>

                <View style={{ flexDirection: "row", alignSelf: "stretch", justifyContent: "space-between" }}>
                    <TextInput
                        label={"Quantidade em estoque*"}
                        placeholder="Digite a quantidade em estoque"
                        placeholderTextColor="#64748B"
                        mode="outlined"
                        style={{ marginBottom: 8, width: '48%', borderRadius: 5, backgroundColor: "#fff" }}
                        activeOutlineColor="#1D77ED"
                        keyboardType="numeric"
                    />
                    <TextInput
                        label={"Quantidade em estoque*"}
                        placeholder="Digite a quantidade em estoque"
                        placeholderTextColor="#64748B"
                        mode="outlined"
                        style={{ marginBottom: 8, width: '48%', borderRadius: 5, backgroundColor: "#fff" }}
                        activeOutlineColor="#1D77ED"
                        keyboardType="numeric"
                    />
                </View>
            </View>
        </KeyboardAwareScrollView >

    );
}