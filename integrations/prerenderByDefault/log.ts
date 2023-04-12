import kleur from "kleur";

type LogOptions = {
  silent: boolean;
  message: string;
};

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

export const log = (options: LogOptions) => {
  // do not log if the "silent" argument is passed
  if (options.silent) {
    return;
  }

  // get new date
  const date = dateTimeFormat.format(new Date());

  // log to the console with colours and text formatting
  console.log(`${kleur.gray(date)} ${kleur
    .bold()
    .magenta("[astro-prerender-by-default]")} ${options.message}
  `);
};
