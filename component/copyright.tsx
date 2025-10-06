import Link from "next/link";
import { FC } from "react";

const Copyright: FC = () => {
  return (
    <div className="col copyright">
      <p className="text-center pt-3">
        <small>
          © 2025 Powered By{" "}
          <Link href="https://www.bluehorse.in/" className="Link">
            BlueHorse
          </Link>{" "}
          | All Rights Reserved.
        </small>
      </p>
    </div>
  );
};

export default Copyright;
