import React, { Component } from 'react'
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/components/categories'
import Related from '../../related/components/related'
import ModalContainer from '../../widgets/containers/modal-container'
import Modal from '../../widgets/components/modal'
import HandleError from '../../widgets/containers/handle-error'
import VideoPlayer from '../../player/containers/video-player'
class Home extends Component {
    state = {
        modalVisible: false,
    }
    openModal = (ev) => {
        this.setState({
            modalVisible: true
        })
    }
    closeModal = (ev) => {
        this.setState({
            modalVisible: false
        })
    }
    render() {
        if (this.state.handleError) {
            return <p>Upsss... Hay un error </p>
        }
        return(
            <HandleError>
                <HomeLayout>
                    <Related />
                    <Categories openModal={this.openModal} categories={this.props.data.categories} />
                    {/* este es un if que valida el valor boolean del state */}
                    {/* modalVisible solo es un boolean inventado pero podria ser cualquier cosa no es que sea un metodo de react o algo asi solo es una propiedad del objeto state que si se cumple muestra los bloques del ModalContainer si no siemplemente no muestra nada xq no los carga  */}
                    {
                        this.state.modalVisible &&
                        <ModalContainer >
                            <Modal
                                closeModal={this.closeModal}
                            >
                                <VideoPlayer
                                    autoplay={true}
                                />
                            </Modal>
                        </ModalContainer>
                    }
                </HomeLayout>
            </HandleError>
        )
    }
}
export default Home