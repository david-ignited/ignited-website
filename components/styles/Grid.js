import styled from 'styled-components';
import { device } from '../utils/breakpoints';

export const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	grid-gap: var(--gap);
	position: relative;
	@media ${device.tablet}{
		grid-template-columns: repeat(3, 1fr);
		grid-gap: var(--gap);
	}
`
export const Card = styled.div`
	background: rgba(43, 27, 78, 0.4);
	backdrop-filter: blur(10px);
	border-radius: 10px;
	padding: 20px;
	text-align: center;
	color: rgba(255, 255, 255, 0.5);
	position: relative;
	.card__content{
		position: relative;
		z-index: 140;
		> span{
			position: absolute !important;
			top: -68% !important;
			left: calc(50% - 40px);
			width: 80px !important;
			height: 80px !important;
		}
		> div{
			margin-top: 50px;
			h3{
				color: #fff;
				font-size: var(--h4-fs);
				line-height: var(--h4-lh);
				margin-top: 30px;
				margin-bottom: 26px;
			}
			p{
				margin-bottom: 20px;
			}
		}
	}
	.card__blur{
		position: absolute;
		left: 0%;
		top: 0%;
		right: 0%;
		bottom: 0%;
		z-index: 100;
		display: flex;
		overflow: hidden;
		flex-direction: column;
		align-items: center;
		border-radius: 10px;
		.s2-blur {
			z-index: 100;
			width: 120px;
			height: 100px;
			margin-top: -30px;
			border-radius: 50%;
			background-image: linear-gradient(45deg, #ff862e, #ff3d33);
			background-image: linear-gradient(45deg, #9600ff, #ff3d33);
			-webkit-filter: blur(50px);
			filter: blur(50px);
		}
	}	
	.card__glow{
		position: absolute;
		top: 0%;
		left: 5%;
		z-index: 130;
		width: 90%;
		height: 2px;
		background-image: linear-gradient(90deg, rgba(118, 110, 245, 0), #ff008a 35%, #6100ff 65%, rgba(45, 169, 245, 0));
		opacity: 0.95;
	}
	.card__mask{
		position: absolute;
		left: 0%;
		top: 0%;
		right: 0%;
		bottom: 0%;
		z-index: 120;
		background-image: linear-gradient(180deg, rgba(43, 27, 78, 0), var(--dark-blue));
		border-radius: 10px;
	}
	.card__outline{
		position: absolute;
		left: 0%;
		top: 0%;
		right: 0%;
		bottom: 0%;
		z-index: 110;
		display: flex;
		flex-direction: column;
		align-items: center;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		box-shadow: inset 0 0 0 2px #181e3c;
		border-radius: 10px;
	}
	@media ${device.mobileL}{
		padding: 40px;
		.card__content{
			display: flex;
			> span{
				top: -20px !important;
    		left: -20px !important; 
			}
			> div{
				margin-top: 0;
				margin-left: 8rem;
				width: calc(100% - 80px);
				text-align: left;
				h3{
					margin-top: 0;
				}
			}
		}
		.card__blur .s2-blur {
			margin-right: 100%;
		}	
	}
	@media ${device.tablet}{
		padding: 40px;
		.card__content{
			flex-direction: column;
			align-items: center;
			> span{
				top: -80px !important;
				left: calc(50% - 60px) !important;
				width: 120px !important;
				height: 120px !important;
			}
			> div{
				margin-left: 0;
				margin-top: 40px;
				width: 100%;
				text-align: center;
				h3{
					margin-top: 30px;
				}
			}
		}
		.card__blur .s2-blur {
			margin-right: 0;
		}	
	}
`