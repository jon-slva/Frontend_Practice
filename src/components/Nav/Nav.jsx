import { useEffect, useState } from 'react'
import './Nav.scss'

const Nav = () => {
	const [menuState, setMenuState] = useState({
		reactMenuOn: false,
		uiMenuOn: false,
		reactMenuFadeTransition: false,
		uiMenuFadeTransition: false
	})

	let timeoutId = null;

	const handleMenu = (menuName) => {
		if (menuName === "reactMenuOn" || menuName === "uiMenuOn") {
			if (timeoutId) {
				clearTimeout(timeoutId);
			}
			setMenuState(prevState => ({
				...prevState,
				[menuName]: true,
				[menuName.replace("MenuOn", "MenuFadeTransition")]: true
			}));
		} else if (menuName === "reactMenuFadeTransition" || menuName === "uiMenuFadeTransition") {
			setMenuState(prevState => ({
				...prevState,
				[menuName]: false
			}));
			timeoutId = setTimeout(() => {
				setMenuState(prevState => ({
					...prevState,
					[menuName.replace("MenuFadeTransition", "MenuOn")]: false
				}));
			}, 250);
		}
	}

	return (
		<>
			<nav className='nav-container'>
				<ul className='nav'>
					<li className='nav__item'>
						<a href="" className='nav__item-link'>
							APIs
						</a>
					</li>
					<li className='nav__item' onMouseEnter={() => handleMenu("reactMenuOn")} onMouseLeave={() => handleMenu("reactMenuFadeTransition")}>
						<a href="" className='nav__item-link'>
							React
						</a>
						{menuState.reactMenuOn && (
							<ul className={`react-submenu ${menuState.reactMenuFadeTransition ? "fade-in" : "fade-out"}`} onMouseEnter={() => handleMenu("reactMenuOn")} onMouseLeave={() => handleMenu("reactMenuFadeTransition")}>
								<li className='react-submenu__header'>
									React Forms
									<ul className='react-submenu__nav'>
										<li className='react-submenu__nav--item'>Forms with State</li>
										<li className='react-submenu__nav--item'>Forms with Refs</li>
										<li className='react-submenu__header2'>
											Form Libraries
											<ul className='react-submenu-2__nav'>
												<li className='react-submenu__nav--item'>React Hook Form</li>
												<li className='react-submenu__nav--item'>Formik</li>
												<li className='react-submenu__nav--item'>Yup</li>
												<li className='react-submenu__nav--item'>React Select</li>
												<li className='react-submenu__nav--item'>React Datepicker</li>
												<li className='react-submenu__nav--item'>React Timepicker</li>
											</ul>
										</li>
									</ul>
								</li>
								<li className='react-submenu__header'>
									React Hooks
									<ul className='react-submenu__nav'>
										<li className='react-submenu__nav--item'>useState</li>
										<li className='react-submenu__nav--item'>useEffect</li>
										<li className='react-submenu__nav--item'>useContext</li>
										<li className='react-submenu__nav--item'>useReducer</li>
										<li className='react-submenu__nav--item'>useMemo</li>
										<li className='react-submenu__nav--item'>useRef</li>
										<li className='react-submenu__nav--item'>useCallback</li>
										<li className='react-submenu__nav--item'>useLayoutEffect</li>
									</ul>
								</li>
								<li className='react-submenu__header'>
									React Router
									<ul className='react-submenu__nav'>
										<li className='react-submenu__nav--item'>React Router Dom</li>
										<li className='react-submenu__nav--item'>UseParams</li>
										<li className='react-submenu__nav--item'>UseLocation</li>
										<li className='react-submenu__nav--item'>React Router Native</li>
									</ul>
								</li>
								<li className='react-submenu__header'>
									Loading
									<ul className='react-submenu__nav'>
										<li className='react-submenu__nav--item'>Suspense</li>
										<li className='react-submenu__nav--item'>Lazy Loading</li>
									</ul>
								</li>
							</ul>
						)}
					</li>
					<li className='nav__item'>
						<a href="" className='nav__item-link'>
							Animations
						</a>
					</li>
					<li className='nav__item' onMouseEnter={() => handleMenu("uiMenuOn")} onMouseLeave={() => handleMenu("uiMenuFadeTransition")}>
						<a href="" className='nav__item-link'>
							UI Libraries
						</a>
						{menuState.uiMenuOn && (
							<ul className={`ui-submenu ${menuState.uiMenuFadeTransition ? "fade-in" : "fade-out"}`} onMouseEnter={() => handleMenu("uiMenuOn")} onMouseLeave={() => handleMenu("uiMenuFadeTransition")}>
								<li className='ui-submenu__item'>Material UI</li>
								<li className='ui-submenu__item'>Ant Design</li>
								<li className='ui-submenu__item'>Chakra UI</li>
								<li className='ui-submenu__item'>React Bootstrap</li>
								<li className='ui-submenu__item'>Reactstrap</li>
							</ul>
						)}
					</li>
					<li className='nav__item'>
						<a href="" className='nav__item-link'>
							Accessibility
						</a>
					</li>
					<li className='nav__item'>
						<a href="" className='nav__item-link'>
							Tables
						</a>
					</li>
				</ul>
			</nav >
		</>
	)
}

export default Nav