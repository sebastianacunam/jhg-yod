import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Outlet, Navigate } from "react-router-dom"
import { authenticateUser, refreshToken } from '../../../redux/actions/actionUser.js'

export default function VerificationUser() {
  const dispatch = useDispatch()

  const token = useSelector((state) => state.refreshToken)

  useEffect(() => {
    dispatch(refreshToken())
    if (!token) {
      return
    }
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
    dispatch(authenticateUser(config))
  }, [dispatch, token])
  if (!token) "Cargando..."

  return <>{token.length ? <Outlet /> : <Navigate to="/login" />}</>
}
