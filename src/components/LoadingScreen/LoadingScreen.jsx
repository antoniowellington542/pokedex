import { 
    ContainerBar, 
    ContainerLoadingScreen, 
    ContainerLoadingBar, 
    Bar, 
    LoadingImage, 
    Text 
} from "./LoadingScreen.style";

const LoadingScreen = () =>{
        return(
            <ContainerLoadingScreen>
                <LoadingImage src="https://i.imgur.com/aMz1Qtu.gif" />
                <ContainerLoadingBar>
                    <ContainerBar>
                        <Bar>carregando</Bar>
                    </ContainerBar>
                    <Text>Loading...</Text>
                </ContainerLoadingBar>
            </ContainerLoadingScreen>
        )
}

export default LoadingScreen;

