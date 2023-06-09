import {Pressable, Text, View} from "react-native";
import ModalPopup from "../ModalPopup";
import React from "react";


interface LiePopupProps {
    liePopupVisible: boolean;
    handlePressYesOnDone: () => Promise<void>;
    setLieOnDone: React.Dispatch<React.SetStateAction<boolean>>;
    setLiePopupVisible: React.Dispatch<React.SetStateAction<boolean>>;
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function LiePopup(props: LiePopupProps) {

    return (
        <ModalPopup visible={props.liePopupVisible}>
            <Text style={{fontSize: 25, textAlign: 'center', fontWeight: "bold"}}>
                Hand aufs Herz, ehrlich abgeschlossen? {"\n"} ... oder nur so getan?
            </Text>
            <Text style={{fontSize: 100, textAlign: "center", marginBottom: 15}}>🤔</Text>
            <View style={{display: "flex", flexDirection: "row", justifyContent: "center", gap: 10}}>
                <Pressable
                    style={{
                        alignItems: 'center',
                        backgroundColor: '#82c91e',
                        padding: 10,
                        width: "30%",
                        borderColor: "black",
                        borderWidth: 3,
                        borderRadius: 15,
                    }}
                    onPress={props.handlePressYesOnDone}
                >
                    <Text style={{fontSize: 20, fontWeight: "bold"}}>Ja</Text>
                </Pressable>
                <Pressable
                    style={{
                        alignItems: 'center',
                        backgroundColor: 'red',
                        padding: 10,
                        width: "30%",
                        borderColor: "black",
                        borderWidth: 3,
                        borderRadius: 15,
                    }}
                    onPress={() => {
                        props.setLieOnDone(true);
                        props.setLiePopupVisible(false);
                        props.setIsPlaying(true);
                    }}
                >
                    <Text style={{fontSize: 20, fontWeight: "bold"}}>Nein</Text>
                </Pressable>
            </View>
        </ModalPopup>
    );
}