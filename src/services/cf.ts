import api from './api';

export interface UserDTO {
  handle: string;
  email: string;
  rank: string;
  rating: number;
  maxRank: string;
  maxRating: number;
}

export enum Verdict {
  OK = 'OK',
  FAILED = 'FAILED',
  PARTIAL = 'PARTIAL',
  COMPILATION_ERROR = 'COMPILATION_ERROR',
  RUNTIME_ERROR = 'RUNTIME_ERROR',
  WRONG_ANSWER = 'WRONG_ANSWER',
  PRESENTATION_ERROR = 'PRESENTATION_ERROR',
  TIME_LIMIT_EXCEEDED = 'TIME_LIMIT_EXCEEDED',
  MEMORY_LIMIT_EXCEEDED = 'MEMORY_LIMIT_EXCEEDED',
  IDLENESS_LIMIT_EXCEEDED = 'IDLENESS_LIMIT_EXCEEDED',
  SECURITY_VIOLATED = 'SECURITY_VIOLATED',
  CRASHED = 'CRASHED',
  INPUT_PREPARATION_CRASHED = 'INPUT_PREPARATION_CRASHED',
  CHALLENGED = 'CHALLENGED',
  SKIPPED = 'SKIPPED',
  TESTING = 'TESTING',
  REJECTED = 'REJECTED'
}

export enum ParticipantType {
  CONTESTANT = 'CONTESTANT',
  PRACTICE = 'PRACTICE',
  VIRTUAL = 'VIRTUAL',
  MANAGER = 'MANAGER',
  OUT_OF_COMPETITION = 'OUT_OF_COMPETITION'
}

export interface SubmissionDTO {
  id: number;
  contestId: number;
  problem: {
    contestId: number;
    index: string;
    name: string;
    tags: string[];
  };
  author: {
    participantType: ParticipantType;
  };
  programmingLanguage: string;
  verdict: Verdict;
}

export async function getUserInfo(cfid: string): Promise<UserDTO> {
  const {
    data: {
      result: [data]
    }
  } = await api.get('user.info', {
    params: {
      handles: cfid
    }
  });
  return data as UserDTO;
}

export async function getUserStatus(cfid: string): Promise<SubmissionDTO[]> {
  const {
    data: {
      result: [data]
    }
  } = await api.get('user.status', {
    params: {
      handle: cfid
    }
  });
  return data as SubmissionDTO[];
}
