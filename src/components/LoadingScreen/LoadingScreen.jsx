import { ContainerBar, ContainerLoadingScreen, ContainerLoadingBar, Bar, LoadingImage, Text } from "../../../styles/LoadingScreen.style";

const LoadingScreen = ({width}) =>{
        return(
            <ContainerLoadingScreen>
                <LoadingImage src="https://i.imgur.com/aMz1Qtu.gif" />
                <ContainerLoadingBar>
                    <ContainerBar>
                        <Bar w={`${width}%`}>{width}%</Bar>
                    </ContainerBar>
                    <Text>Loading...</Text>
                </ContainerLoadingBar>
            </ContainerLoadingScreen>
        )
}

export default LoadingScreen;

