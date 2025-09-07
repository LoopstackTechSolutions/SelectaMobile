import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    Main: {
        flex: 1, padding: 16, paddingBottom: 0
    },
    TextTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 0,
        textAlignVertical: 'center',
    },
    TextSubtitle: {
        fontSize: 12,
        marginBottom: 8,
        color: 'gray'
    },
    ProfileBoxActivity: {
        alignItems: "center",
        flex: 1,
        backgroundColor: "#F1F5F9",
        padding: 16,
        borderRadius: 8,
        elevation: 2,
        marginRight: 8
    },
    ProfileOptions: {
        flexDirection: "column"
    },
    ProfileOption: {
        flexDirection: "column"
    },
    footerContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        height: 80,
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderTopColor: "#ddd",
        paddingBottom: 10,
    },
    button: {
        alignItems: "center",
        overflow: "hidden"
    },
    btn: {
        alignSelf: "stretch",
        marginTop: 10,
        backgroundColor: "#005FDB",
        borderRadius: 6,
        padding: 6,
        color: "#fff"
    },
    buttonText: {
        fontSize: 14,
        color: "#64748B",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 0,
    },
    empty: {
        marginTop: 16,
        fontSize: 14,
        color: "gray",
    },
    row: {
        justifyContent: "space-between",
    },
})