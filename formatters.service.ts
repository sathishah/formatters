import * as moment from 'moment';

export interface formatters {
    currencyFormat(value: number, language: string, style: string, curType: string, fraction: number): string | null;
    dateFormat(value: string | Date, format: string): Date | string | null;
}

export class GeneralFormatter implements formatters {
    private formatter: formatters;
    constructor() { }

    public currencyFormat(value: number, language: string, style: string, curType: string, fraction: number): string | null {
        let format = new Intl.NumberFormat(language, {
            style: style,
            currency: curType,
            minimumFractionDigits: fraction,
        }).format(value);

        return format.toString();
    }

    public dateFormat(value: string | Date, format: string): Date | string | null {
        return moment(value, format, true).format(format);
    }
}