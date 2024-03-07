export default function blogDateFormatHandler(inputDate: string): string {
  // Parse the input date string into a Date object
  const date = new Date(inputDate);

  // Options for formatting the date
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };

  // Format the date using the options
  return date.toLocaleDateString("en-US", options);
}
