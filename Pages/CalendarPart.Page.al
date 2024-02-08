page 50100 "Calendar Part"
{
    PageType = CardPart;
    Caption = 'Calendar';

    layout
    {
        area(Content)
        {
            usercontrol(Calendar; calendarControl)
            {
                ApplicationArea = All;

                trigger OnControlAddInReady()
                begin
                end;

                trigger OnInvoke(Context: Text)
                var
                    Response: Text;
                    CreationDate: Date;

                begin
                    //if Confirm('Invoking?') then
                    //    CurrPage.Calendar.OnInvokeResult(Response);
                    //Message(Context); 
                    // Use date for Production Batch creation
                    Evaluate(CreationDate, Context);
                end;
            }
        }
    }
}