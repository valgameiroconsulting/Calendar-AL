page 50100 "ad_Calendar Part"
{
    PageType = CardPart;
    Caption = 'Calendar';

    layout
    {
        area(Content)
        {
            usercontrol(Calendar; ad_CalendarCtrl)
            {
                ApplicationArea = All;

                trigger OnControlAddInReady()
                begin
                end;

                trigger OnInvoke(Context: JsonObject)
                var
                    Response: JsonObject;

                begin
                    if Confirm('Invoking?') then
                        CurrPage.Calendar.OnInvokeResult(Response);
                end;
            }
        }
    }
}