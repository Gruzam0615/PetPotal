import { useEffect } from 'react'
import { useAlert } from '../../../hooks/useAlert'
import { useNavigate } from 'react-router-dom';

export default function MateBoardNotPage() {
  const { openAlert } = useAlert();
  const navigater = useNavigate();
  useEffect(() => {
    openAlert({
      title: '존재하지 않는 페이지',
      type: 'error',
      content: '존재하지 않는 페이지입니다.',
    });

    navigater('/mate/1');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{fontSize: '2rem', fontWeight: '700', color: 'red', textAlign: 'center'}}>잘못된 접근 방식입니다.</div>
  )
}
