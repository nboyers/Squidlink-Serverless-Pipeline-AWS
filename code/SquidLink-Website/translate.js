import { TranslateClient , CreateParallelDataCommand } from "@aws-sdk/client-translate";


function translateText(sourceText) {
  const client = new TranslateClient({ region: "us-east-1" })

  var params = {
    Text: sourceText,
    SourceLanguageCode: "auto",
    TargetLanguageCode: "es"
  };

  const command = new CreateParallelDataCommand(params);

  try {
    const data = await client.send(command);
    alert(data)

  } catch(error) {
  const {requestId, cfId, extendedRequestID } = error.$metadata;
  console.log({requestId, cfId, extendedRequestID})
  } finally {
    console.log("Completed")
  }
}
