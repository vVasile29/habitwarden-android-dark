import React, {useState} from "react";
import {useRouter} from "expo-router";
import {MEDITATION, useFetchPointsPerTask, useSaveData, WATER} from "../(tabs)/habits";
import {Habit} from "../../components/HabitSummary";
import MeditationLogo from "../../assets/svg/MeditationLogo";
import HabitScreenWithPopups from "../../components/HabitScreenWithPopups";
import {heightDP, widthDP} from "../../constants/DpScaling";

export default function Meditation() {
    const [liePopupVisible, setLiePopupVisible] = useState(false);
    const [losePointsWarningPopupVisible, setLosePointsWarningPopupVisible] = useState(false);
    const [shameCheckbox, setShameCheckbox] = useState(false);
    const [losePointsPopupVisible, setLosePointsPopupVisible] = useState(false);
    const [showPointsPopupVisible, setShowPointsPopupVisible] = useState(false);
    const [isPlaying, setIsPlaying] = useState(true)
    const [habit, setHabit] = useState<Habit>();
    const [lieOnDone, setLieOnDone] = useState(false);
    const [wantedToQuit, setWantedToQuit] = useState(false);
    const [habitScreenButtonsDisabled, setHabitScreenButtonsDisabled] = useState(false);
    const router = useRouter();

    const habitPromise = useFetchPointsPerTask(MEDITATION);
    habitPromise.then(habit => setHabit(habit));
    const saveData = useSaveData();

    async function handlePressDone() {
        setIsPlaying(prev => !prev)
        setLiePopupVisible(true);
    }

    async function handlePressYesOnDone() {
        setLiePopupVisible(false);
        setHabitScreenButtonsDisabled(true);
        await saveData(habit?.name!, true, lieOnDone, wantedToQuit, habit?.pointsPerTask!);
        setShowPointsPopupVisible(true);
    }

    async function handlePressNotDone() {
        setHabitScreenButtonsDisabled(true);
        await saveData(MEDITATION, false, lieOnDone, wantedToQuit, habit?.pointsPerTask!);
        router.replace("/habits");
    }

    async function handleShowPointsClose(){
        setShowPointsPopupVisible(false);
        router.replace("/habits");
    }

    return (
        <HabitScreenWithPopups
            isPlaying={isPlaying}
            duration={60}
            setLiePopupVisible={setLiePopupVisible}
            taskDescription={"Bitte meditiere für " + habit?.amountPerTask! + " Minute!"}
            logo={<MeditationLogo position={"relative"} width={widthDP("100%")} height={heightDP("33%")}/>}
            liePopupVisible={liePopupVisible}
            handlePressYesOnDone={handlePressYesOnDone}
            setLieOnDone={setLieOnDone}
            losePointsWarningPopupVisible={losePointsWarningPopupVisible}
            handlePressDone={handlePressDone}
            fakeUserCancellationDescription={
                "Wer hat denn bitte etwas gegen Entspannung?\n" +
                "Wieso würdest du jetzt aufgeben wollen, \n" +
                "hier geben im Durchschnitt nur " + habit?.fakeUserCancellationRate! * 100 + "% auf?"
            }
            shameCheckbox={shameCheckbox}
            setShameCheckbox={setShameCheckbox}
            setLosePointsWarningPopupVisible={setLosePointsWarningPopupVisible}
            setLosePointsPopupVisible={setLosePointsPopupVisible}
            setIsPlaying={setIsPlaying}
            losePointsPopupVisible={losePointsPopupVisible}
            pointsPerTask={habit?.pointsPerTask!}
            handlePressNotDone={handlePressNotDone}
            setWantedToQuit={setWantedToQuit}
            showPointsPopupVisible={showPointsPopupVisible}
            handleShowPointsClose={handleShowPointsClose}
            habitScreenButtonsDisabled={habitScreenButtonsDisabled}
        />
    );
}