# 베이스 이미지 설정 (Node.js 18)
FROM node:18 AS builder

# 작업 디렉토리 설정
WORKDIR /app

# package.json과 yarn.lock 파일 복사
COPY package.json yarn.lock ./
COPY packages/coreui/package.json packages/coreui/
COPY packages/webapp/package.json packages/webapp/

# 전체 워크스페이스의 의존성 설치
RUN yarn install --frozen-lockfile

# 프로젝트 전체 복사
COPY . .

# coreui와 webapp 빌드
RUN yarn workspace @packages/coreui build
RUN yarn workspace @packages/webapp build

# 프로덕션 이미지 설정
FROM node:18 AS production

# 작업 디렉토리 설정
WORKDIR /app

# 빌더 단계에서 필요한 파일만 복사
COPY --from=builder /app/packages/coreui/dist ./packages/coreui/dist
COPY --from=builder /app/packages/webapp/dist ./packages/webapp1/dist
COPY --from=builder /app/packages/webapp/package.json ./packages/webapp1/
COPY --from=builder /app/public ./public  # Next.js의 public 폴더 복사
COPY --from=builder /app/packages/webapp/.next ./.next  # 빌드된 Next.js 결과물 복사

# 프로덕션 의존성만 설치
RUN yarn install --production --frozen-lockfile

# Next.js 서버 시작
CMD ["yarn", "workspace", "@packages/webapp", "start"]