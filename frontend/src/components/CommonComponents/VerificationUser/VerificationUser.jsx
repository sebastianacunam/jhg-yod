import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Outlet, Navigate } from "react-router-dom"
import { authenticateUser, refreshToken } from '../../../redux/actions/actionUser.js'

export default function VerificationUser() {
  const dispatch = useDispatch()

  // const token = useSelector((state) => state.refreshToken)

  const token = localStorage.getItem('token')
  useEffect(() => {
    dispatch(refreshToken())
    if (!token) {
      return
    }

    dispatch(authenticateUser())
  }, [dispatch, token])

  return <>{token ? <Outlet /> : <Navigate to="/login" />}</>
}
