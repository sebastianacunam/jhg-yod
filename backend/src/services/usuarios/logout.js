export const logout = async (res) => {
   res.clearCookie("refreshToken");
   return { ok: true };
};