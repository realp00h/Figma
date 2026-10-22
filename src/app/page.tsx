export default function Home() {
  return (
    <main className="flex flex-col gap-stack-md px-page-horizontal py-section">
      <h1 className="text-heading-md text-text-strong">초대장 만들기</h1>
      <p className="text-body-md text-text-secondary">
        프로젝트 초기 설정이 완료됐어요.
      </p>
      <button
        type="button"
        className="flex h-52 items-center justify-center rounded-control bg-action-primary text-label-lg text-white"
      >
        시작하기
      </button>
    </main>
  );
}
