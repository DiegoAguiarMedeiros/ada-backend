export interface ITokenService {
    sign(payload: unknown): string;
    verify(token: string): unknown;
  }