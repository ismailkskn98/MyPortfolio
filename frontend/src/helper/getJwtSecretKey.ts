export const getJwtSecretKey = (): Uint8Array => {
  const secretKey = process.env.JWT_SECRET_KEY;

  if (!secretKey) {
    throw new Error("secretKey not found!");
  }

  return new TextEncoder().encode(secretKey);
};
