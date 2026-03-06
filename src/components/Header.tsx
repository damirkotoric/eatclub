import { User, FadersHorizontal } from "@phosphor-icons/react";

function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 692 703"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M565.316 419.527C592.815 447.092 621.822 452.504 656.698 435.762C664.914 431.703 683.861 431.196 691.406 442.357C690.4 447.938 690.232 451.489 689.226 454.871C650.997 586.945 524.572 690.27 386.913 701.431C167.43 719.019 37.9871 562.255 7.47107 417.667C-34.4469 219.303 104.721 27.7031 307.269 2.67515C347.007 -2.22985 387.416 -0.36884 426.652 8.08616C436.712 10.2852 441.239 12.6522 438.892 24.6592C436.209 37.6802 431.682 46.6431 420.28 55.2671C394.626 74.8841 388.925 101.941 399.992 134.241C320.347 120.712 250.931 139.314 193.923 195.628C157.873 231.14 135.908 274.432 131.045 324.657C120.147 436.776 185.707 534.014 291.34 564.453C385.74 592.018 514.344 553.63 565.316 419.527Z" />
      <path d="M411.092 158.877C393.3 182.119 383.061 206.209 388.265 235.219C392.964 260.666 405.889 280.176 426.702 295.444C431.569 299.007 436.437 305.454 436.94 311.052C441.808 367.036 487.295 403.51 543.188 395.198C544.698 395.028 546.209 395.028 547.72 395.198C545.034 456.78 478.063 527.523 403.875 547.712C318.272 570.954 226.964 536.006 178.959 461.7C130.619 386.885 136.83 290.016 194.233 220.799C246.098 158.538 340.596 130.885 411.092 158.877Z" />
    </svg>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-5xl mx-auto flex items-center justify-between h-14 px-[var(--space-page-x)]">
        <button
          type="button"
          aria-label="Account"
          className="-ml-2 p-2 rounded-full hover:bg-secondary transition-colors"
        >
          <User size={24} className="text-foreground" />
        </button>
        <Logo className="h-7 w-auto text-brand-red" />
        <button
          type="button"
          aria-label="Filters"
          className="-mr-2 p-2 rounded-full hover:bg-secondary transition-colors"
        >
          <FadersHorizontal size={24} className="text-foreground" />
        </button>
      </div>
    </header>
  );
}
