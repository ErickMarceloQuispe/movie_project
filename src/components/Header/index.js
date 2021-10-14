import React from "react";
import RBDMLogo from "../../images/react-movie-logo.svg";
import TDBMLogo from "../../images/tmdb_logo.svg";
import { Wrapper,Content,LogoImg,TDBMLogoImg} from "./Header.styles";

const Header = ()=>(
    <Wrapper>
        <Content>
            <LogoImg src={RBDMLogo} alt="rdbm-logo"/>
            <TDBMLogoImg src={TDBMLogo} alt="tdbm-logo"/>
        </Content>
    </Wrapper>
)

export default Header;