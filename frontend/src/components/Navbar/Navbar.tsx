import { useNavigate, useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SearchIcon from '../../assets/icon/search.png';
import style from './Navbar.module.css';
import { useRecoilState } from "recoil";
import { UserType, userState } from '../../recoil/user';
import Controller from '../../api/controller';
import { useAlert } from '../../hooks/useAlert';
import { useConfirm } from '../../hooks/useConfirm';

export default function Navbar() {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();
  const historyValue = useParams();
  const controller = new Controller();
  const { openAlert } = useAlert();
  const { openConfirm, closeConfirm } = useConfirm();

  const [userInfo, setUserInfo] = useRecoilState<UserType[]>(userState);

  // console.log(historyValue);
  const searchSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if(keyword === '') {
      // alert('검색어를 입력해주세요');
      openAlert({
        title: '검색어 경고',
        type: 'error',
        content: '검색어를 입력해주세요'
      });
      return ;
    }

    navigate(`/search/${keyword}`);
    /**
     * 2023.04.11 gkfrjt
     * 검색 경로로 이동시키기
     * css 적용시켜놓기
     * 회원가입페이지 적용시키기
     */
  };

  const handleKeyword = (e:React.ChangeEvent<HTMLInputElement>):void => {
    // const target = e.target;
    // setKeyword(target.value);
    setKeyword(e.target?.value);
  };

  useEffect(():void => {
    const historyKeyword = historyValue.keyword;

    if(historyKeyword) setKeyword(historyKeyword);

  }, [historyValue]);

  const logoutHandler = async () => {
    openConfirm({
      title: '로그아웃',
      content: '로그아웃 하시겠습니까?',
      callback: async () => {
        openAlert({
          title: '로그아웃 실패',
          type: 'error',
          content: '에러가 발생하였습니다.\r\n새로고침 후 다시 시도해주세요'
        });
        const result = await controller.logout();
        if(result.data.responseCode === 200) {
          closeConfirm();
          openAlert({
            title: '로그아웃 성공',
            type: 'success',
            content: '정상적으로 로그아웃 되었습니다'
          });
          setUserInfo([{
            account: '',
            address1: '',
            address2: '',
            address3: '',
            message: '',
            responseCode: 0,
          }]);
          navigate('/');
        } else {
          openAlert({
            title: '로그아웃 실패',
            type: 'error',
            content: '새로고침 후 다시 시도해주세요'
          });
        }
      }
    });
  }

  return (
    <header>
      <article className={style.navbarContainer}>
        <section className={style.navbarWrapper}>
          <div className={style.navbarTop}>
            <ul className={style.topInner}>
              {userInfo[0].account === '' ?
              <>
                <li>
                  <Link to={'/memberjoin'}>회원가입</Link>
                </li>
                <li>
                  <Link to={'/login'}>로그인</Link>
                </li>
              </>
              : 
              <>
                <li>
                  <Link to={'/mypage/info'}>마이페이지</Link>
                </li>
                <li>
                  <Link to={'#'} onClick={logoutHandler}>로그아웃</Link>
                </li>
              </>
              }
              <li>
                <Link to='/'>고객센터</Link>
              </li>
            </ul>
          </div>

          <div className={style.navbarMiddle}>
            <h1 className={style.navbarLogo}>
              <Link to={'/'}>Pet Portal</Link>
            </h1>
            <form onSubmit={searchSubmit} className={style.searchForm}>
              <input
                onChange={handleKeyword}
                type="search"
                className={style.searchInput}
                value={keyword || ''}
                placeholder="검색어를 입력해주세요."
              />
              {/* <button className={style.searchBtn}>아이콘</button> */}
              <button className={style.searchBtn}>
                <img src={SearchIcon} alt="search icon" />
              </button>
            </form>
            <ul className={style.headerItem}>
              <li>아이콘1</li>
              <li>아이콘2</li>
              <li>아이콘3</li>
            </ul>
          </div>

          <nav className={style.navbarBottom}>
            <ul className={style.menu}>
              <li className={style.menuItem}>
                <Link to="/mate" className={style.menuItemLink}>메이트</Link>
              </li>
              <li className={style.menuItem}>
                <Link to="#" className={style.menuItemLink}>병원</Link>
              </li>
              <li className={style.menuItem}>
                <Link to="#" className={style.menuItemLink}>미용</Link>
              </li>
              <li className={style.menuItem}>
                <Link to="#" className={style.menuItemLink}>호텔링</Link>
              </li>
              <li className={style.menuItem}>
                <Link to="#" className={style.menuItemLink}>숙박</Link>
              </li>
              <li className={style.menuItem}>
                <Link to="#" className={style.menuItemLink}>음식</Link>
              </li>
            </ul>
          </nav>
        </section>
      </article>
    </header>
  );
}
