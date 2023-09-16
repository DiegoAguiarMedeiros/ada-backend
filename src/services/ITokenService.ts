/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ITokenService {
    sign(payload: any): string;
    verify(token: string): any;
  }